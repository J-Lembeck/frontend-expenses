import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { Button, Table, Form, message } from 'antd';
import Header from "../../Components/Header";
import CategoriesModal from "./components/CategoriesModal";
import api from "../api";

const Categories = () => {

    const [tableData, setTableData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isNewCategory, setIsNewCategory] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

    useEffect(() => {
        api.get("/categories/find-all")
            .then((response) => {
                const data = response.data.map((item) => {
                    return ({
                        key: item.id,
                        code: item.id,
                        description: item.description
                    })
                })
                setTableData(data);
            })
    }, [])

    const columns = [
        {
            title: 'Código',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Descrição',
            dataIndex: 'description',
            key: 'description',
        }
    ];

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleSave = () => {
        form.resetFields();
        setIsModalOpen(true);
        setIsNewCategory(true);
    };

    const handleDelete = () => {
        api.delete(`/categories/?ids=${selectedRowKeys}`)
        .then((response) => {
            messageApi.info('Cadatro realizado com sucesso.');
        })
    }

    const handleEdit = () => {
        const selectedItem = tableData.find((item) => {return item.key == selectedRowKeys[0]})
        form.setFieldsValue({
            description: selectedItem.description 
        })
        setIsModalOpen(true);
        setIsNewCategory(false);
    }

    return (
        <>
            {contextHolder}
            <Header />
            <div className="container">

                <div className="button-container">
                    <h1>Categorias</h1>

                    <div className="side-buttons-container">
                        <Icon icon="ph:trash" onClick={handleDelete} fontSize={"1.5rem"}/>
                        <Icon icon="mdi:pencil-outline" onClick={handleEdit} fontSize={"1.5rem"}/>
                        <Button type="primary" size="large" onClick={handleSave}>Incluir</Button>
                    </div>
                </div>

                <Table
                    rowSelection={rowSelection}
                    dataSource={tableData}
                    columns={columns}
                />

                <CategoriesModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    form={form}
                    isNewCategory={isNewCategory}
                    selectedRowKeys={selectedRowKeys}
                    />

            </div>
        </>
    )
}

export default Categories;