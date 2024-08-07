import { Button } from "../../button";
import macbookExposed from "../../../../assets/macbook-exposed.png";

const Hero = () => {
    return (
        <div className="custom-container h-[calc(100vh-110px)] grid grid-cols-1 lg:grid-cols-2 place-items-center my-5">
            <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-nowrap">
                    <span className="text-gray">Don't worry,</span><br />
                    <span>We'll fix it.</span>
                </h1>
                <p className="text-dark-gray text-lg mb-5 mt-5 lg:mt-10">Welcome to <span className="text-primary-foreground font-semibold">iRepair</span>, your one-stop place for all kinds of <span className="text-primary-foreground font-semibold">Macbook</span> repairs and diagnostics.</p>
                <Button>Book a service</Button>
            </div>
            <div className="w-3/4 lg:w-full mx-auto">
                <img src={macbookExposed} className="-rotate-[35deg] md:h-[60%] lg:h-[90%] object-contain" alt="MacBook Exposed" />
            </div>
        </div>
    );
};

export default Hero;