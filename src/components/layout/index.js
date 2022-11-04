import  Head  from 'next/head';
import Header from './Header/index'
import Footer from './Footer'
import {LAYOUT_TYPE} from 'types/layout-type';


function MainLayout({children , title , description , icon , type}) {
  switch(type){
    case LAYOUT_TYPE.ALL:
      return (
        <>
        <Head>  
          <title>
            {title}
          </title>
          <meta name="description" content={description}/>
          <link rel="icon" href={icon || '/favicon.ico'}/>
        </Head>
        <main>
          <Header/>
          <main style={{color:'#000'}}>{children}</main>
          <Footer/>
        </main>
        </> 
      )
    case LAYOUT_TYPE.JUST_HEADER :
      return (
        <>
        <Head>  
        <title>
          {title}
        </title>
        <meta name="description" content={description}/>
        <link rel="icon" href={icon || '/favicon.ico'}/>
      </Head>
      <main>
        <Header/>
        <main style={{color:'#000'}}>{children}</main>
      </main>
      </>
    );
    case LAYOUT_TYPE.JUST_FOOTER :
      return (
        <>
        <Head>  
        <title>
          {title}
        </title>
        <meta name="description" content={description}/>
        <link rel="icon" href={icon || '/favicon.ico'}/>
      </Head>
      <main>
        <main style={{color:'#000'}}>{children}</main>
        <Footer/>
      </main>
        </>
      );
    default :
      return (
        <>
        <Head>  
          <title>
            {title}
          </title>
          <meta name="description" content={description}/>
          <link rel="icon" href={icon || '/favicon.ico'}/>
        </Head>
        <main>
          <Header/>
          <main style={{color:'#000'}}>{children}</main>
          <Footer/>
        </main>
        </>
      )

  }
}

export default MainLayout
