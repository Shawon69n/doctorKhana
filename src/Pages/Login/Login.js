import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
const Login = () => {

    let signInError;
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    if(gUser){
        console.log(gUser);
    }

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(loading || gLoading){
          return <Loading></Loading>
      }
     
      if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email,data.password)
    };
   
    if(user || gUser){
        navigate(from , {replace: true});
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                     <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>

                    <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />

                    <label class="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>


                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>

                    <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />



                    <label class="label">
     {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
     {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                      {signInError}          
                    <input className='btn w-full max-w-xs' type="submit" value='Login' />
                    </form>
                    <p className='text-sm'>New to doctor khana? <Link to='/signup'><span className='text-sm our-service-txt'>Sign up now</span></Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with google</button>
                     </div>
            </div>
        </div>
    );
};

export default Login;