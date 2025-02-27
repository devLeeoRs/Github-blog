import {
  BlogContainer,
  CardContainer,
  ProfileBiography,
  ProfileHeader,
  ProfileInfo,
  ProfileInfoBox,
  ProfileInfoContainer,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import avatar from "../../assets/avatar.png";
import { Search } from "./search";
import Card from "../../components/Card";

export function Blog() {
  return (
    <BlogContainer>
      <ProfileInfoContainer>
        <div className="profileImage">
          <img src={avatar} alt="Foto de perfil de Cameron Williamson" />
        </div>
        <ProfileInfoBox>
          <ProfileHeader>
            <h1>Cameron Williamson</h1>
            <button>
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </button>
          </ProfileHeader>
          <ProfileBiography>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </ProfileBiography>
          <ProfileInfo>
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
          </ProfileInfo>
        </ProfileInfoBox>
      </ProfileInfoContainer>
      <Search />
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </BlogContainer>
  );
}
