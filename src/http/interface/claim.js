import axios from '././api'

export const isMaterial = (id) => {
    return axios({
        url: `/claim/claimMaterial${id}`,
        method: 'get'
    })
}

export default {
    isMaterial
}