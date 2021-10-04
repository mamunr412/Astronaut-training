import { useEffect, useState } from "react"

const useData = () => {
    const [datas, SetDatas] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => SetDatas(data))
    }, [])
    return [datas]
}
export default useData;