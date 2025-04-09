/*
파일명 : Home.jsx
파일설명 : 로컬잇 웹사이트의 메인(홈) 화면 UI
작성자 : 정여진
기간 : 2025-04-09.~
*/

import React from 'react';
import './Home.css';
import TagBadge from '../../components/Tag/TagBadge';
import Tags, {getTagsByType} from '../../components/Tag/tags';
import bannerImage from './home-banner-image.png';
import carrotImg from './carrot.png';
import ProductCard from "../../components/ProductCard/ProductCard";
import FloatingButton from "./FloatingButton"; // 임시 이미지

/* 임시로. 나중에 데이터에서 가져올 것. */
const products = [
    {
        image: carrotImg,
        title: '국내산 세척당근',
        originalPrice: 2000,
        discountPrice: 1300,
        tags: ['강원', 'GOOD'],
    },
    // ... 총 8개 만들어줘야 함
];



const Home = () => {
    const regionTags = getTagsByType('region');
    return (
        <div className="banner-container">
            <img
                className="banner-image"
                src={bannerImage}
                alt="배너"
            />

            <FloatingButton onClick={() => window.scrollTo(0, 1000)} />

            <div className="region-tags">
                {regionTags.map((tag, index) => (
                    <TagBadge key={index} label={tag.label} bg={tag.bg} color={tag.color} />
                ))}
            </div>

            <div className="product-grid">
                {products.map((product, i) => (
                    <ProductCard key={i}{...product}/>
                ))}

            </div>
        </div>

    );
};

export default Home;
