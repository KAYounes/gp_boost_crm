import "./ProfileItem.css";
import { BiLogOut } from "react-icons/bi";
import profile from "./profile.jpg";

const ProfileItem = (props) => {
  return (
    <div>
      {props.isOpen && (
        <div class="profile">
          {props.isOpen && (
            <div class="profile-details">
              <img src={profile} alt="profileImg" />
              <div class="name_job">
                <div class="name">Ahmed Ali</div>
                <div class="job">Project Manager</div>
              </div>
            </div>
          )}
          <BiLogOut className="log_out" />
        </div>
      )}
      {!props.isOpen && <BiLogOut className="logout navIcon " />}
    </div>
  );
};

export default ProfileItem;
