import { cookies } from "next/headers"
import { COOKIE_KEY } from "../../../constant/cookie.js"
import {
    encodeVideo,
    transformVideoProps,
} from "../../../pages/api/rendering.js"
import { Cache } from "./cache.js"
import { ClipPreview } from "./components/ClipPreview.jsx"
import { Download } from "./components/Download.jsx"
import { LetterButton } from "./components/LetterButton"
import { LetterToName } from "./components/LetterToName"

const cache = new Cache({ maxSize: 100 })

/**
 * tag text 추출
 * ```ts
 * type Tag = { id: number, text: string }
 * type Tags = Tag[]
 * ```
 * */
const toStringTags = (tags) => tags.map((tag) => tag.text)

export default async function Step4() {
    const nextCookies = cookies()

    /**@type {import("../../../atoms/letter".Letter)} */
    const pureVideoClientProps = JSON.parse(nextCookies.get(COOKIE_KEY)?.value)
    const videoClientProps = {
        ...pureVideoClientProps,
        tags: toStringTags(pureVideoClientProps.tags),
    }
    const transformedVideoProps = await transformVideoProps(videoClientProps)
    const encode = await cache.get(
        transformVideoProps,
        async () => await encodeVideo(transformedVideoProps)
    )

    const downloadUrl = `https://s3.${encode.region}.amazonaws.com/${encode.bucketName}/renders/${encode.renderId}/out.mp4`
    // 여기까지문제 없음
    return (
        <div className="h-full flex flex-col justify-between">
            <LetterToName />
            <p className="font-bold">{downloadUrl}</p>
            <div className="h-full flex-1">
                <ClipPreview videoClientProps={videoClientProps} />
            </div>
            <LetterButton urlParams={{ ...encode, to: videoClientProps.to }} />
            <Download
                encode={encode}
                // transformedVideoProps={transformedVideoProps}
            />
        </div>
    )
}
