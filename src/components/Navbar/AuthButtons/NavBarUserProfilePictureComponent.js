import { useAuth0 } from "@auth0/auth0-react";
import profileImage from "../../../Images/download.png"

const NavbarUserProfilePictureComponent = () => {
    const { user ,isLoading} = useAuth0();
    const { picture } = user;

    // console.log(user);
    if (isLoading) {
        <>
        <img
            className="h-8 w-8 rounded-full"
            src={profileImage}
            alt=""
        />
    </>  
    }
    return (
        <>
            <img
                className="h-8 w-8 rounded-full"
                src={picture}
                alt=""
            />
        </>
    );
}

export default NavbarUserProfilePictureComponent;