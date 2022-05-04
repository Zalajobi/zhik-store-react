import React, {useEffect, useState} from 'react'
import Header from "../../components/common/Header";
import {handleGetRequest} from "../../helper/requests";
import {BASEURL} from "../../helper/constants";
import {PrettyTreePreloader} from "../../components/common/PrettyPreloaders";
import ViewUserProfile from "../../components/profile/ViewUserProfile";
// import {useNavigate} from "react-router-dom";

const ProfilePage = (props) => {
	const [userProfile,  setUserProfile] = useState({})
    const [loading, setLoading] = useState(true);

	// const navigate = useNavigate();

	useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await handleGetRequest(`${BASEURL}user/profile/view`, sessionStorage.getItem('authToken'))
                setUserProfile(response);
            } catch (error) {
                console.error(error.message);
				// navigate('/login')
            }
            setLoading(false);
        }
        fetchData();
  }, []);

    return (
		<React.Fragment>

			{loading && <div><PrettyTreePreloader title="Profile Loading..."/></div>}

            {!loading && (
                <div>
	                <Header/>

                    <ViewUserProfile userProfileDetails={userProfile}/>
                </div>
            )}

		</React.Fragment>
    )
}

export default ProfilePage;