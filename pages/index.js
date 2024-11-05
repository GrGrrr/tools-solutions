import {Layout} from "@/components/Layout";
import {HeroSection} from "@/components/HeroSection";
import {DoSection} from "@/components/DoSection";
import {ClientsSection} from "@/components/ClientsSection";
import {ProductsSection} from "@/components/ProductsSection";
import {NumeralsSection} from "@/components/NumeralsSection";
import {CareerSection} from "@/components/CareerSection";
import {AwardsSection} from "@/components/AwardsSection";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <DoSection/>
            <ClientsSection/>
            <ProductsSection/>
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