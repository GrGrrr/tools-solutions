import {Layout} from "@/components/Layout";
import {ClientsSection} from "@/components/ClientsSection";
import {ProductsSection} from "@/components/ProductsSection";
import {NumeralsSection} from "@/components/NumeralsSection";
import {CareerSection} from "@/components/CareerSection";
import {AwardsSection} from "@/components/AwardsSection";
import {AboutHeroSection} from "@/components/AboutHero";
import {NumbersSection} from "@/components/NumbersSection";


export default function About() {
    return (
        <>
            <AboutHeroSection/>
            <NumbersSection/>
            <ClientsSection/>
            <ProductsSection/>
            <NumeralsSection/>
            <AwardsSection/>
            <CareerSection/>
        </>
    );
}

About.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};