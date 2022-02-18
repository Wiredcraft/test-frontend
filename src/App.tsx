import React, { Suspense } from 'react'
import './App.css'
import { ImageContainer, ImageData } from './components/ImageContainer'
import { TopNav } from './components/TopNav'

const MasonryLayout = React.lazy(() => import('./components/MasonryLayout'))

function App() {
    return (
        <div className="App">
            <TopNav />
            <Suspense fallback={<div>Loading...</div>}>
                <MasonryLayout columns={6} gap={14} padding={80}>
                    {generateImages(images)}
                </MasonryLayout>
            </Suspense>
        </div>
    )
}

const images = [
    {
        _id: '5f115174961c75468fbe0f44',
        index: 0,
        name: 'purple',
        src: 'https://picsum.photos/240/379?random=371'
    },
    {
        _id: '5f115174ad8e8ef73a0dab9e',
        index: 1,
        name: 'purple',
        src: 'https://picsum.photos/240/392?random=286'
    },
    {
        _id: '5f11517440a0b6750a7bc6c0',
        index: 2,
        name: 'yello',
        src: 'https://picsum.photos/240/409?random=286'
    },
    {
        _id: '5f1151743af104c006ecdbc0',
        index: 3,
        name: 'red',
        src: 'https://picsum.photos/240/395?random=302'
    },
    {
        _id: '5f1151744ab1f867ddc342dd',
        index: 4,
        name: 'green',
        src: 'https://picsum.photos/240/255?random=415'
    },
    {
        _id: '5f11517476f25b8a489d15f2',
        index: 5,
        name: 'green',
        src: 'https://picsum.photos/240/176?random=147'
    },
    {
        _id: '5f115174587b54fe6f1b9645',
        index: 6,
        name: 'red',
        src: 'https://picsum.photos/240/300?random=363'
    },
    {
        _id: '5f115174511adfd037d39fe5',
        index: 7,
        name: 'green',
        src: 'https://picsum.photos/240/292?random=361'
    },
    {
        _id: '5f11517431568abef3a2c58d',
        index: 8,
        name: 'yello',
        src: 'https://picsum.photos/240/417?random=244'
    },
    {
        _id: '5f1151740cc37870e3cb24e3',
        index: 9,
        name: 'blue',
        src: 'https://picsum.photos/240/280?random=484'
    },
    {
        _id: '5f1151741d318f404bbe276f',
        index: 10,
        name: 'purple',
        src: 'https://picsum.photos/240/177?random=475'
    },
    {
        _id: '5f1151748efb715b8e765ea2',
        index: 11,
        name: 'blue',
        src: 'https://picsum.photos/240/381?random=236'
    },
    {
        _id: '5f115174878bccde71dc9d2b',
        index: 12,
        name: 'yello',
        src: 'https://picsum.photos/240/476?random=219'
    },
    {
        _id: '5f115174be4bafe550f692db',
        index: 13,
        name: 'red',
        src: 'https://picsum.photos/240/407?random=151'
    },
    {
        _id: '5f115174f425cd3f23fff34c',
        index: 14,
        name: 'yello',
        src: 'https://picsum.photos/240/191?random=141'
    },
    {
        _id: '5f1151746d54e6d7784cd7a8',
        index: 15,
        name: 'purple',
        src: 'https://picsum.photos/240/227?random=290'
    },
    {
        _id: '5f1151748fa7e7b9bb35e9ee',
        index: 16,
        name: 'yello',
        src: 'https://picsum.photos/240/405?random=126'
    },
    {
        _id: '5f1151747ce9a56c1283fe2f',
        index: 17,
        name: 'purple',
        src: 'https://picsum.photos/240/454?random=303'
    },
    {
        _id: '5f11517449c9418b45730608',
        index: 18,
        name: 'red',
        src: 'https://picsum.photos/240/369?random=252'
    },
    {
        _id: '5f115174a4c8a026b25ed7f1',
        index: 19,
        name: 'green',
        src: 'https://picsum.photos/240/381?random=283'
    },
    {
        _id: '5f115174d182fdd0c0953304',
        index: 20,
        name: 'purple',
        src: 'https://picsum.photos/240/446?random=321'
    },
    {
        _id: '5f115174929bf71064bc1e6e',
        index: 21,
        name: 'blue',
        src: 'https://picsum.photos/240/180?random=147'
    },
    {
        _id: '5f115174c6b0e9f6b9269c7d',
        index: 22,
        name: 'green',
        src: 'https://picsum.photos/240/374?random=297'
    },
    {
        _id: '5f1151749447e8f2ae513f8f',
        index: 23,
        name: 'green',
        src: 'https://picsum.photos/240/393?random=183'
    }
]

const generateImages = (imageData: Array<ImageData>) => {
    let result: Array<JSX.Element> = []
    imageData.forEach((image) => {
        result.push(<ImageContainer key={image._id} data={image} />)
    })
    return result
}

export default App
