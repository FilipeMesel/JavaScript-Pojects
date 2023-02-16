import { ImageBackground } from 'react-native';

import BackgroundImg from '../../assets/background-galaxy.png'

import { styles } from './styles';
    
interface Props {
    children: React.ReactNode;
}

export function Background({children}: Props) {


  return (
    <ImageBackground 
    source={BackgroundImg}
    style={styles.container}
    defaultSource = {BackgroundImg}  //Memoriza a imagem padrão e acelera o carregamento da imagem.
    
    >
        {children}
    </ImageBackground>
  );
}