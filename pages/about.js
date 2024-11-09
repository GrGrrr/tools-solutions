import {Layout} from "@/components/Layout";
import {HeroSection} from "components/AboutPage/HeroSection";
import {NumbersSection} from "components/AboutPage/NumbersSection";
import {ApproachSection} from "@/components/AboutPage/ApproachSection";
import {StepsSection} from "@/components/AboutPage/StepsSection";
import {AwardsSection} from "@/components/AboutPage/AwardsSection";
import {CareerSection} from "@/components/AboutPage/CareerSection";

export default function About() {
    return (
        <>
            <HeroSection/>
            <NumbersSection/>
            <ApproachSection/>
            <StepsSection/>
            <AwardsSection/>
            <CareerSection/>
        </>
    );
}

About.getLayout = function getLayout(page) {
    return (
        <div className="relative">
            <Layout>
                {page}
            </Layout>
        </div>
    );
};