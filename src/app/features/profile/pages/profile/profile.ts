import { Profile } from "../../models/profile.model";

export let mockProfile = <Profile>{
  username: "e_manapaly",
  bio: "asfsdf",
  image: "sfsdfsd",
  following: true,
};

export let wrongUser = <Profile>{
  username: "Wrong User",
  bio: "asfsdf",
  image: "sfsdfsd",
  following: true,
};
