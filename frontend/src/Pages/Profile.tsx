import  { memo, useState } from "react";
import { useAuthContext } from "../Contexts/AuthContexts";
import SignIn from "../Components/ProfileComponents/SignIn";
import SignUp from "../Components/ProfileComponents/SignUp";

const Profile = () => {


    const {signIn, signUp, signOut, currentUser} = useAuthContext();

    const [sign, setSign] = useState<Boolean>(true)

    return (
        <section className="flex flex-col  items-center min-h-screen">

           {currentUser ? 
           <>

             <h1 className="text-[1.2em] mt-10">Welcom Back <strong>{currentUser.name}</strong></h1>
             <div>
                 
             </div>

             </>
              : 
                <div>
                     <h1 className="text-[1.2em] mt-10 w-[550px] text-gray-800 text-center max-[600px]:w-[400px] max-[450px]:w-[300px] ">Join <strong>ChronoWatch</strong> today. Sign in or create an account to save your favorites and shop the best watches.</h1>

                     <div className="flex flex-row justify-center items-center gap-0 mt-10">
                       <div className="text-[1.2em] border-b border-b-2  w-[200px] flex justify-center items-center h-[40px] cursor-pointer max-[500px]:w-[150px]" style={{borderBottomColor : sign ? "gray" : "lightgray",
                         fontWeight : sign ? "900" : "400"
                       }}
                       onClick={()=>setSign(prev => !prev)}
                       >Sign In</div>
                       <div className="text-[1.2em] border-b-2 w-[200px] flex justify-center items-center h-[40px] cursor-pointer max-[500px]:w-[150px]"
                        style={{borderBottomColor : !sign ? "gray" : "lightgray",
                         fontWeight : !sign ? "900" : "400"
                       }}
                       onClick={()=>setSign(prev => !prev)}
                       >Sign Up</div>
                     </div>

                     <div className="flex flex-col justify-center items-center">

                        {sign ?
                           <SignIn/>
                           : 
                            <SignUp/>
                          }

                     </div>
                </div>
           }
            


        </section>
    );
}

export default memo(Profile);