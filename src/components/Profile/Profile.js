import React from "react";
import "./_Profile.scss";

const profile = props => {
  //construct class to toggle on and off
  let profileClasses = "profile-drawer";
  if (props.showProfile) {
    profileClasses = "profile-drawer profile-open";
  }
  return (
    <div className={profileClasses}>
      <h1>Profile page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita fugit nisi delectus deserunt tenetur consequatur ea placeat repellat consectetur, quia nihil dignissimos dolorum fugiat quibusdam, cumque sed tempora repellendus aspernatur mollitia blanditiis dicta. Nam ut eius, harum quam, architecto incidunt eligendi molestiae velit magnam assumenda eos aut. Labore natus, facere repellat ullam exercitationem quam itaque doloremque ducimus aperiam accusantium dolorum quidem neque laboriosam quo at adipisci suscipit et distinctio explicabo deleniti culpa vero voluptatum fuga expedita. Delectus consequuntur similique iusto, eveniet aut assumenda enim amet voluptatibus deserunt tenetur vitae obcaecati, eius provident veritatis. Fugit fugiat dolores inventore quisquam! Repellat exercitationem quibusdam nemo impedit autem veniam esse quidem at facere dolor hic est labore, facilis deleniti cumque doloremque eius illo asperiores, ullam voluptas ratione. Assumenda temporibus culpa sequi ipsam rem.</p>
    </div>
  );
};
export default profile;
