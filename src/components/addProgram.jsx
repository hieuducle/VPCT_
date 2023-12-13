import React, { useState } from 'react';
import '../css/table.css';
import { addProgramsAPI } from "../../src/api/todos";
function AddProgramC() {
    
        const [showForm, setShowForm] = useState(false);

        const ShowForm = () => {
            setShowForm(!showForm);
        }

        const addorEditTodo = async (event) => {
            event.preventDefault();
            const name = event.target[0].value;
            const machuongtrinh = event.target[1].value;
            const loaiChuongTrinhId = event.target[2].value;

            await addProgramsAPI({
                name: name,
                machuongtrinh:machuongtrinh,
                loaiChuongTrinhId: loaiChuongTrinhId
              });
            //   fetchData();
        }

        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row border-bottom mb-4 pb-4">
                            <div className="col-sm-4"></div>
                            <div className="col-sm-5">
                                <label className="font-weight-normal" for="reportType">Loại chương trình </label>
                                <select class="custom-select option-select">
                                    <option value="" disabled selected hidden>Tất cả</option>
                                    <option className='opchildren' value="1">Tất cả</option>
                                    <option className='opchildren' value="2">Chương trình trọng điểm cấp nhà nước</option>
                                    <option className='opchildren' value="3">Chương trình độc lập quỹ gen</option>
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <label className="font-weight-normal" for="reportType">Giai đoạn </label>
                                <select class="custom-select option-select">
                                    <option value="" disabled selected hidden>Tất cả</option>
                                    <option className='opchildren' value="1">Tất cả</option>
                                    <option className='opchildren' value="1">2006-2010</option>
                                    <option className='opchildren' value="2">2011-2015</option>
                                    <option className='opchildren' value="3">2016-2020</option>
                                    <option className='opchildren' value="3">2015-2025</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="row mb-2">
                            <div className="col-sm-2">
                                <h5>Quản lý chương trình</h5>
                            </div>
                            <div className="col-sm-4">
                                <td className="project-actions text-right">
                                    <a className="btn btn-success btn-sm mr-2" href="#" onClick={ShowForm}>
                                    <i className="fas fa-plus" /> Thêm
                                    </a>
                                    <a className="btn btn-warning btn-sm mr-2" href="#">
                                    <i className="fas fa-pencil-alt" /> Sửa
                                    </a>
                                    <a className="btn btn-danger btn-sm mr-2" href="#">
                                    <i className="fas fa-trash" /> Xóa
                                    </a>
                                    <a className="btn btn-info btn-sm mr-2" href="#">
                                    <i className="fas fa-redo"></i> Làm mới
                                    </a>
                                    <a className="btn btn-warning btn-sm" href="#">
                                    <i class="far fa-object-group"></i> Hợp nhất
                                    </a>
                                </td>

                                {showForm && (
                                        // <form onSubmit={addorEditTodo}>
                                        //     <div className="row">
                                        //         <div className="col-sm-3 mt-4">
                                        //         <label className="font-weight-normal" for="reportType"><b>Loại CT</b><p className="text-danger d-inline">(*)</p></label>
                                        //         </div>
                                        //         <div className="col-sm-9 mt-4">
                                        //         <select class="custom-select option-select">
                                        //             <option value="" disabled selected hidden>Chọn loại chương trình</option>
                                        //             <option className='opchildren' value="1">Chương trình trọng điểm cấp nhà nước</option>
                                        //             <option className='opchildren' value="2">Chương trình độc lập quỹ gen</option>
                                        //         </select>
                                        //         <br />
                                        //         </div>
                                            
                                        //         <div className="col-sm-3 mt-4">
                                        //         <div className="input-group">
                                        //         <label className="font-weight-normal mb-4" for="reportType"><b>Tên CT</b><p className="text-danger d-inline">(*)</p></label>
                                        //         </div>
                                        //         </div>
                                        //         <div className="col-sm-9 mt-4">
                                        //         <input className="form-control rounded" type="text" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                        //         <br />
                                        //         </div>
                                                

                                        //         <div className="col-sm-3">
                                        //         <div className="input-group">
                                        //         <label className="font-weight-normal mb-4" for="reportType"><b>Mã số CT</b><p className="text-danger d-inline">(*)</p></label>
                                        //         </div>
                                        //         </div>
                                        //         <div className="col-sm-9">
                                        //         <input className="form-control rounded" type="text" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                        //         <br />
                                        //         </div>

                                        //         <div className="col-sm-5">
                                        //         <button type="submit" className='btn btn-info btn-sm mr-2'><i class="fas fa-save"></i> Lưu</button>
                                        //         <button className='btn btn-danger btn-sm'><i class="fas fa-window-close"></i> Hủy</button>
                                        //         </div>
                                        //     </div>
                                        // </form>
                                        <form onSubmit={addorEditTodo}>
                                        <label >Thêm loại chương trình</label>
                                        <input type="text" name="name" id="name" />
                                        <input type="text" name="maChuongTrinh" id="maChuongTrinh" />
                                        <input type="text" name="loaiChuongTrinhId" id="loaiChuongTrinhId" />

                                        
                                        <input type="text" name="id" id="id" style={{display:"none"}} />

                                        <button type="submit">Lưu</button>
                                    </form>
                                    )}
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/home">Chương trình</a></li>
                                <li className="breadcrumb-item active">Dữ liệu</li>
                            </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main content */}
                
                {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>
        );
}

export default AddProgramC;
