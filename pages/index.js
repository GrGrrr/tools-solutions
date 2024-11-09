import {Layout} from "@/components/Layout";
import {HeroSection} from "components/HomePage/HeroSection";
import {DoSection} from "components/HomePage/DoSection";
import {ClientsSection} from "components/HomePage/ClientsSection";
import {ProductsSection} from "components/HomePage/ProductsSection";
import {NumeralsSection} from "components/HomePage/NumeralsSection";
import {CareerSection} from "components/HomePage/CareerSection";
import {AwardsSection} from "components/HomePage/AwardsSection";
import {CaseSection} from "components/HomePage/CaseSection";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <DoSection/>
            <ClientsSection/>
            <ProductsSection/>
            <CaseSection/>
            <NumeralsSection/>
            <AwardsSection/>
            <CareerSection/>
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return (
        <>
            <Layout>
                {page}
            </Layout>
        </>
    );
};