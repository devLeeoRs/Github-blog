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
import { Search } from "./search";
import Card from "../../components/Card";
import { useContext } from "react";
import { BlogContext } from "../../context/blogcontext";

export function Blog() {
  const { userInfo } = useContext(BlogContext);

  return (
    <BlogContainer>
      <ProfileInfoContainer>
        <div className="profileImage">
          <img
            src={userInfo.avatar_url}
            alt={`Foto de perfil de ${userInfo.name}`}
          />
        </div>
        <ProfileInfoBox>
          <ProfileHeader>
            <h1>{userInfo.name}</h1>
            <button>
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </button>
          </ProfileHeader>
          <ProfileBiography>{userInfo.bio}</ProfileBiography>
          <ProfileInfo>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {userInfo.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {userInfo.company ? userInfo.company : "Sem empresa"}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {userInfo.followers}
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
