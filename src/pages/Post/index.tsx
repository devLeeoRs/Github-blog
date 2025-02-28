import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PostBox,
  PostButtons,
  PostContainer,
  PostContent,
  PostInfo,
} from "./styled";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CodeBlock } from "../../components/CodeBlock";

export function Post() {
  const exampleCode = `
  let foo = 42; // foo is now a number
  foo = 'bar'; // foo is now a string
  foo = true; // foo is now a boolean`;
  return (
    <PostContainer>
      <PostBox>
        <PostButtons>
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
            VOLTAR
          </button>
          <button>
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </PostButtons>
        <h1>JavaScript data types and data structures</h1>
        <PostInfo>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </span>
        </PostInfo>
      </PostBox>

      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
        <a>Dynamic typing</a>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
        <CodeBlock code={exampleCode} language="javascript" />
      </PostContent>
    </PostContainer>
  );
}
