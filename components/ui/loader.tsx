import animationData from '../../public/lottie/loading-spinner.json'
import Lottie from 'react-lottie'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export default function Loader({height, width}) {
  return (
    <Lottie 
      options={defaultOptions}
      height={height}
      width={width}
    />
  )
}