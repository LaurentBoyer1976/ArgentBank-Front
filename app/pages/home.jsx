import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../components/banner";
import Features from "../components/features";
import { fetchFeatures } from "../api/services/api"; // Si nécessaire
import { setFeatures } from "../store/featuresSlice"; // Action Redux à créer

/**
 * @description Composant Home qui affiche la page d'accueil
 * @info Le composant utilise Redux pour récupérer les données des fonctionnalités.
 * @returns {JSX.Element} - Le composant Home
 */
const Home = () => {
  const dispatch = useDispatch();
  const featuresData = useSelector((state) => state.features.data); //Info: Sélectionne les données depuis le store

  useEffect(() => {
    const getFeatures = async () => {
      const data = await fetchFeatures(); // Info: Appel API pour récupérer les données
      dispatch(setFeatures(data)); // Info: Met à jour le store Redux
    };

    if (featuresData.length === 0) {
      getFeatures(); //Info:  Charge les données si elles ne sont pas déjà dans le store
    }
  }, [dispatch, featuresData]);

  return (
    <main className="main">
      <Banner />
      <Features datas={featuresData} />
    </main>
  );
};

export default Home;