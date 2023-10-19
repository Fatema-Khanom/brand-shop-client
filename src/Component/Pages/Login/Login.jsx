

// import { useContext, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

// const Login = () => {
//     const { googleSignIn,signIn } = useContext(AuthContext);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
   

//     const handleGoogle = () => {
//         googleSignIn().then((result) => {
//             console.log(result.user);
//         });
//     };
//     const handleLogin=()=>{
//         if((email,password)){
//             signIn(email,password).then((result) => {
//                 console.log(result.user);
//             });
//             .catch((error)=>{
//                 console.log(error.message)
//             })
//         }
      
//     }


//     const backgroundImage = "https://i.ibb.co/RCB3zt3/0-3-B7lr-Dhgjh-Rrpjxh.jpg";

//     return (
//         <div
//             className="min-h-screen flex items-center justify-center"
//             style={{
//                 backgroundImage: `url(${backgroundImage})`,
//                 backgroundSize: "cover",
//                 opacity: 1,
//             }}
//         >
//             <div className="max-w-md w-full p-4 bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
                
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                             Email
//                         </label>
//                         <input
//                             onChange={(e) => setName(e.target.value)}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             name="email"
//                             type="text"
//                             placeholder="Email"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                             Password
//                         </label>
//                         <input
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             name="password"
//                             type="password"
//                             placeholder="Password"
//                         />
//                     </div>
//                     <div className="flex items-center justify-center">
                   
//                     <button  onClick={handleLogin} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4
//                      rounded focus:outline-none focus:shadow-outline"type="submit">Login</button>
//                     </div>
//                     <div className="flex items-center justify-center mt-2">
//                         <button onClick={handleGoogle} type="button" className="btn-primary">
//                             Google Login
//                         </button>
//                     </div>
                
//             </div>
//         </div>
//     );
// };

// export default Login;

import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { googleSignIn, signIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleGoogle = () => {
        googleSignIn().then((result) => {
            console.log(result.user);
        });
    };

    const handleLogin = () => {
        if (email && password) { // Check if email and password are provided
            signIn(email, password)
                .then((result) => {
                    console.log(result.user);
                    alert('Login successful')
                })
                .catch((error) => {
                    setError(error.message); // Set the error message
                });
        } else {
            setError("Please provide both email and password.");
        }
    };

    const backgroundImage = "https://i.ibb.co/RCB3zt3/0-3-B7lr-Dhgjh-Rrpjxh.jpg";

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                opacity: 1,
            }}
        >
            <div className="max-w-md w-full p-4 bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={handleLogin} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Login
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-2">
                        <button onClick={handleGoogle} type="button" className="btn-primary">
                            Google Login
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
