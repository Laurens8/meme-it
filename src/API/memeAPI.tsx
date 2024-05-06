import { FunctionComponent, useState, useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import axios from "axios";
import "../pages/memePages/memepage.css";

interface Meme {
  title: string;
  url: string;
  points: number;
  author: string;
  ups: number;
}

interface ApiProps {
  number: number;
  apiName: string;
}

interface ApiComponentProps extends ApiProps {
  color: string;
  slide: number;
}

const Api: FunctionComponent<ApiComponentProps> = ({
  number,
  apiName,
  color,
  slide,
}) => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const loadingRef = useRef<HTMLDivElement>(null);
  const loadingMemes = useRef<boolean>(false);

  const loadMemes = async () => {
    if (loadingMemes.current) return;

    loadingMemes.current = true;
    const uniqueMemes = new Set(memes.map((meme) => meme.author));
    const newMemes: Meme[] = [];

    while (uniqueMemes.size < memes.length + number) {
      const url =
        apiName === ""
          ? `https://meme-api.com/gimme/${apiName}${number}`
          : `https://meme-api.com/gimme/${apiName}/${number}`;
      const response = await axios.get(url);
      const fetchedMemes: Meme[] = response.data.memes;
      fetchedMemes.forEach((meme) => {
        if (!uniqueMemes.has(meme.author)) {
          uniqueMemes.add(meme.author);
          meme.title = truncateString(meme.title, 30);
          meme.points = meme.ups;
          newMemes.push({ ...meme });
        }
      });
    }

    setMemes((prevMemes) => [...prevMemes, ...newMemes]);
    loadingMemes.current = false;
  };

  useEffect(() => {
    setMemes([]);
    loadMemes();
  }, [apiName]);

  const onIntersection: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      loadMemes();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      rootMargin: "100px",
      threshold: 1.0,
    });

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => observer.disconnect();
  }, [loadingRef]);

  const incrementPoints = (index: number) => {
    setMemes((prevMemes) => {
      const newMemes = [...prevMemes];
      newMemes[index].points += 1;
      return newMemes;
    });
  };

  const decrementPoints = (index: number) => {
    setMemes((prevMemes) => {
      const newMemes = [...prevMemes];
      newMemes[index].points -= 1;
      return newMemes;
    });
  };

  const truncateString = (string: string, maxLength: number): string => {
    if (string.length > maxLength) {
      return string.substring(0, maxLength) + "...";
    } else {
      return string;
    }
  };

  return (
    <>
      {memes.map((meme, index) => (
        <Card
          style={{ marginBottom: "3rem" }}
          key={index}
          className="cardStyle"
        >
          <CardHeader className={`topStyle${color}-background`}>
            <p className="titleStyle">{meme.title}</p>
          </CardHeader>
          <CardBody>
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={meme.url}
              width={slide}
            />
          </CardBody>
          <CardFooter>
            <p style={{ marginRight: "1rem", color: "white" }}>
              points: {meme.points}
            </p>
            <a
              style={{ marginRight: "0.5rem", color: "white" }}
              onClick={() => incrementPoints(index)}
            >
              <ImArrowUp />
            </a>
            <a
              style={{ color: "white" }}
              onClick={() => decrementPoints(index)}
            >
              <ImArrowDown />
            </a>
          </CardFooter>
          <p style={{ marginLeft: "0.7rem", color: "white" }}>
            from: {meme.author}
          </p>
        </Card>
      ))}
      <div ref={loadingRef}></div>
    </>
  );
};

export default Api;
