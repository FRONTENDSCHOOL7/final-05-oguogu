import React, { useEffect } from 'react'
import { SplashContainer } from './SplashPage.style'

export default function SplashPage() {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     history.push('/Login');
  //   }, 2500);

  //   return () => clearTimeout(timer);
  // },[history]);
  
//   return (
//     <SplashContainer>
      
//     </SplashContainer>
//   )
// }

const [loading,setLoading] = useState(true);

useEffect(()=>{
  const timer = setTimeout(()=>{
    setLoading(false);
  },2500)

  return () => clearTimeout(timer);
},loading)

return (
  <>
  <GlobalStyle />
  {loading ? <Splash /> : <AppRouter />}
  </>
)
}
