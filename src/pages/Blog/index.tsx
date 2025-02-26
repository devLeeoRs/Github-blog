import { BlogContainer, ProfileBox, ProfileInfo } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Blog() {
  return (
    <BlogContainer>
      <ProfileBox>
        <div className="profileImage">
          <img src="" alt="" />
        </div>
        <ProfileInfo>
          <div className="header">
            <h3>Cameron Williamson </h3>
            <button>
              <span>github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </button>
          </div>
          <div className="description">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </div>
          <div className="info">
            <span>
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              32 seguidores
            </span>
          </div>
        </ProfileInfo>
      </ProfileBox>
    </BlogContainer>
  );
}
