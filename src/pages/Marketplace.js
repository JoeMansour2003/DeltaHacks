import React, { useState, useEffect } from "react";

const Marketplace = () => {
    const [hideCards, setHideCards] = useState({
        toronto: true,
        ottawa: true,
        gatineau: true,
        kingston: true,
        montreal: true,
        flag: false,
    });

    const fetch = () => {
        var get = document.getElementById("get").value;
        document.getElementById("put").value = get;
    };

    const fetch2 = () => {
        var put = document.getElementById("put").value;
        document.getElementById("get").value = put;
    };

    const handleCheckboxChange = (checkboxId) => {
        setHideCards((prevState) => {
            if (!prevState.flag) {
                prevState.toronto = false;
                prevState.ottawa = false;
                prevState.gatineau = false;
                prevState.kingston = false;
                prevState.montreal = false;
                prevState.flag = true;
            }

            const allUnchecked = Object.values(prevState).every(
                (value) => value === false
            );
            if (allUnchecked) {
                // Make all cards visible by resetting the state
                showAll();
            }

            return {
                ...prevState,
                [checkboxId]: !prevState[checkboxId],
            };
        });
    };
    const showAll = () => {
        setHideCards({
            toronto: true,
            ottawa: true,
            gatineau: true,
            kingston: true,
            montreal: true,
        });
    };

    return (
        <div className="container">
            <br />
            <br />
            <div className="row">
                {/* cards */}
                <div className="col">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {hideCards.ottawa && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/img/apple.png")}
                                        className="card-img-top"
                                        alt="Image of an apple"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Apples</h5>
                                        <p className="card-text">$2</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                McIntosh
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.toronto && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/img/banana.png")}
                                        className="card-img-top"
                                        alt="Image of banana"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Banana</h5>
                                        <p className="card-text">$3841</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                Cavendish Banana
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.gatineau && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/img/tomato.png")}
                                        className="card-img-top"
                                        alt="Image of a tomato"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Juicy ass Tomato
                                        </h5>
                                        <p className="card-text">$6</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                Campari tomato
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.kingston && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/img/cilantro.png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Cilantro</h5>
                                        <p className="card-text">$5</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                Coriander, also known as
                                                cilantro, is an annual herb in
                                                the family Apiaceae. All parts
                                                of the plant are edible, but the
                                                fresh leaves and the dried seeds
                                                are the parts most traditionally
                                                used in cooking.
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.montreal && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/img/cabbage.png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Cabbage</h5>
                                        <p className="card-text">$8</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                The best in the world
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.jackfruits && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/img/cabbage.png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Cabbage</h5>
                                        <p className="card-text">$8</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                The best in the world
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.montreal && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/img/onion.png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Onion</h5>
                                        <p className="card-text">$6</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                Shrek's favourite snasck
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.montreal && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/img/jackfruit.webp")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            jackfruits
                                        </h5>
                                        <p className="card-text">$10</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                Jack's favourite fruit
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.montreal && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/img/pineapple.png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            pineapple
                                        </h5>
                                        <p className="card-text">$7</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                Does it go on Pizza?!?!?
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.montreal && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/img/potato.png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Potato</h5>
                                        <p className="card-text">$10</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                I'm as smart as a potato
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.montreal && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    <img
                                        src={require("../components/img/broccoli.png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Broccoli</h5>
                                        <p className="card-text">$-1</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                nobody's favourite vegetable
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
