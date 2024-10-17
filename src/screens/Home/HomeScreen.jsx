import CollectiveDelivery from "../../components/home/CollectiveDelivery";
import Features from "../../components/home/Features";
import FeaturesGrid from "../../components/home/FeaturesGrid";
import Framework from "../../components/home/Framework";
import Heropage from "../../components/home/Hero";
import JoinUs from "../../components/home/JoinUs";
import ProcessMap from "../../components/home/ProcessMap";
import UpliftDelivery from "../../components/home/UpliftDelivery";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Featurepage from "../Featurepage/Featurepage";


const HomeScreen = () => {
  return (
    <div className="overflow-x-hidden">
     <Header/>
      <Heropage/>  
      <Features />
      <FeaturesGrid />
      <UpliftDelivery />
      <CollectiveDelivery />
      {/* <Framework /> */}
      <ProcessMap />
      <JoinUs />
      <Footer />
      
      
    </div>
  )
}

export default HomeScreen
