import axiosClient from './axiosClient';

const END_POINT = {
    CHUONGTRINHS: "ChuongTrinhs",
    NHIEMVUS: "NhiemVus",
    CHUYENGIAS: "ChuyenGias",
    GIAIDOANS: "GiaiDoans",
    LINHVUCKHOAHOC: "LinhVucs",
    CHUYENNGANH: "ChuyenNganhs",
    DONVICHUQUAN: "DonViChuQuans",
    COQUANCHUTRI: "CoQuanChuTris",
    USERROLES: "UserRoles/GetUsersWithRoles"
}
export const getProgramsAPI = ()  => {
    return axiosClient.get(`${END_POINT.CHUONGTRINHS}`);
}

export const getNhiemvuAPI = ()  => {
    return axiosClient.get(`${END_POINT.NHIEMVUS}`);
}

export const getChuyengiasAPI = ()  => {
    return axiosClient.get(`${END_POINT.CHUYENGIAS}`);
}

export const getGiaidoansAPI = ()  => {
    return axiosClient.get(`${END_POINT.GIAIDOANS}`);
}

export const getLinhvuckhoahocAPI = ()  => {
    return axiosClient.get(`${END_POINT.LINHVUCKHOAHOC}`);
}


export const getChuyennganhAPI = ()  => {
    return axiosClient.get(`${END_POINT.CHUYENNGANH}`);
}


export const getDonvichuquanAPI = ()  => {
    return axiosClient.get(`${END_POINT.DONVICHUQUAN}`);
}

export const getCoquanchutriAPI = ()  => {
    return axiosClient.get(`${END_POINT.COQUANCHUTRI}`);
}

export const getUsersAPI = ()  => {
    return axiosClient.get(`${END_POINT.USERROLES}`);
}

// export const delTodosAPI = (id)  => {
//     return axiosClient.delete(`${END_POINT.TODOS}/${id}`);
// }

// export const addTodosAPI = (todo)  => {
//     return axiosClient.post(`${END_POINT.TODOS}`, todo);
// }

// export const  editTodosAPI = (todo)  => {
//     return axiosClient.put(`${END_POINT.TODOS}`, todo);
// }



