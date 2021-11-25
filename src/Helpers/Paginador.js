import React from 'react';
import Proyect from '../Components/Proyect';

export const Paginador = ( array, n, next, prev) =>{
    let imin = 0;
    let iMax = n;
    let size = array.length;

    if(!next && !prev){
        for(let i = imin;i<iMax;i++){
            return(
                <Proyect proyecto={array[i]}/>
            )
        }
    }
    

    if(next && !prev){

        console.log('next parameter');

        imin = iMax;
        iMax += 12;

        if(iMax>size){
            iMax = size;
        }

        for(let i=imin;i<iMax;i++){
            console.log(array[i]);
        }
    }


    else if(prev && !next){

        console.log('Prev parameter');
        

        imin -=n;
        iMax-= n;

        if(imin<0){
            imin = 0;
        }

        for(let i=imin;i<iMax;i++){
            console.log(array[i]);
        }
    }
}

// Paginador(array, 6, true, false);//Avanzar
// Paginador(array, 6, false, true);//Retroceder 