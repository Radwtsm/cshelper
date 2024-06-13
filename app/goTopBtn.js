import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function GoTopBtn() {
    const [isVisible, setIsVisible] = React.useState(false)

        const toggleVisible = () => { 
            const scrolled = document.documentElement.scrollTop; 
            if (scrolled > 300){ 
              setIsVisible(true) 
            }  
            else if (scrolled <= 300){ 
              setIsVisible(false) 
            } 
          }; 
          
          const scrollToTop = () =>{ 
            window.scrollTo({ 
              top: 0,  
              behavior: 'smooth'
              /* you can also use 'auto' behaviour 
                 in place of 'smooth' */
            }); 
          }; 
          
          React.useEffect(() => {
            // window is accessible here.
            window?.addEventListener('scroll', toggleVisible); 
          }, []);
          
    

  return (
    
      <Fab  style={{display: isVisible ? 'inline' : 'none',position:'fixed',zIndex:'1',right:'7%',bottom:'40px'}} onClick={scrollToTop} size="large" color="secondary" aria-label="add">
        <ArrowUpwardIcon />
      </Fab>

  );
}