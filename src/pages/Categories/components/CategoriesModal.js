import { Form, Input, Modal, message } from "antd"
import api from "../../api"

const CategoriesModal = ({ isModalOpen, setIsModalOpen, form, isNewCategory, selectedRowKeys }) => {
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = (values) => {
        if(isNewCategory){
            api.post("/categories", {
                id: null,
                description: values.description
            }).then((response) => {
                messageApi.info('Cadatro realizado com sucesso.');
                setIsModalOpen(false);
            })
        }else{
            api.put("/categories", {
                id: selectedRowKeys[0],
                description: values.description
            }).then((response) => {
                messageApi.info('Cadatro alterado com sucesso.');
                setIsModalOpen(false);
            })
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    return (
        <>
            {contextHolder}
            <Modal
                title="Cadastro de Categoria"
                open={isModalOpen}
                onCancel={handleCancel}
                cancelText="Cancelar"
                okText="Cadastrar"
                onOk={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            onFinish(values);
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                >
                    <Form.Item
                        name="description"
                        label="Descrição"
                    >
                        <Input placeholder="Descrição" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default CategoriesModal;