import React, { Component } from 'react';
import '../../css/table.css';
import {getCoquanchutriAPI} from "../../../src/api/todos";
export default class Facility_con extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coquanchutris: [],
        };
    }

    async componentDidMount() {
        await this.fetchData();
    }

    fetchData = async () => {
        const coquanchutris = await getCoquanchutriAPI();
        this.setState({ coquanchutris });
    };
    render() {
        const { coquanchutris } = this.state;
    
        return (
            <div>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-2">
                                <h5>Quản lý Cơ quan chủ trì</h5>
                            </div>
                            <div className="col-sm-4">
                                <td className="project-actions text-right">
                                    <a className="btn btn-success btn-sm mr-2" href="#">
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
                            </div>
                            <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/category/facility">Cơ quan chủ trì</a></li>
                                <li className="breadcrumb-item active">Dữ liệu</li>
                            </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                    
                                    <table id="example1" className="table table-bordered table-striped text-center">
                                        <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th></th>
                                            <th>Tên cơ quan</th>
                                            <th>Tên đơn vị chủ quản</th>
                                            <th>Địa chỉ</th>
                                            <th>Số điện thoại</th>
                                            <th>Số Fax</th>
                                        </tr>
                                        </thead>

                                     <tbody>
                                        {coquanchutris.map((item, key) => (
                                                        <tr key={key}>
                                                            <td>{key + 1}</td>
                                                            <td>
                                                                <div class="form-check text-center">
                                                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                                </div>
                                                            </td>
                                                            <td>{item.name}</td>
                                                            <td>ten don vi chu quan</td>
                                                            {/* <td></td> */}
                                                            <td>{item.address}</td>
                                                            <td>{item.phoneNumber}</td>
                                                            {/* <td>{item.chucVu}</td> */}
                                                            {/* <td>{item.hocVi}</td> */}
                                                            <td>{item.fax}</td>
                                                            
                                                        </tr>
                                                    ))}
                                     </tbody>
                                    </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}
                </div>
                {/* /.content-wrapper */}
            </div>
        );
    }
}
