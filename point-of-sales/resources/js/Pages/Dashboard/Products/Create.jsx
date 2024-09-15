import React, { useState } from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head, useForm, usePage } from '@inertiajs/react'
import Card from '@/Components/Dashboard/Card'
import Button from '@/Components/Dashboard/Button'
import { IconPencilPlus, IconUsersPlus } from '@tabler/icons-react'
import Input from '@/Components/Dashboard/Input'
import Textarea from '@/Components/Dashboard/TextArea'
import toast from 'react-hot-toast'
import InputSelect from '@/Components/Dashboard/InputSelect'

export default function Create({ categories }) {

    const { errors } = usePage().props

    const { data, setData, post, processing } = useForm({
        image: '',
        barcode: '',
        title: '',
        category_id: '',
        description: '',
        buy_price: '',
        sell_price: '',
        stock: ''
    })

    const [selectedCategory, setSelectedCategory] = useState(null)
    // Set gender
    const setSelectedCategoryHandler = (value) => {
        setSelectedCategory(value)
        setData('category_id', value.id)
    }


    const handleImageChange = (e) => {
        const image = e.target.files[0]
        setData('image', image)
    }

    const submit = (e) => {
        e.preventDefault()
        post(route('products.store'), {
            onSuccess: () => {
                if (Object.keys(errors).length === 0) {
                    toast('Data successfully', {
                        icon: '👏',
                        style: {
                            borderRadius: '10px',
                            background: '#1C1F29',
                            color: '#fff',
                        },
                    })
                }
            },
            onError: () => {
                toast('An error occurred while saving the data', {
                    style: {
                        borderRadius: '10px',
                        background: '#FF0000',
                        color: '#fff',
                    },
                })
            },
        })
    }

    return (
        <>
            <Head title='Add Product Data' />
            <Card
                title={'Add Product Data'}
                icon={<IconUsersPlus size={20} strokeWidth={1.5} />}
                footer={
                    <Button
                        type={'submit'}
                        label={'Submit'}
                        icon={<IconPencilPlus size={20} strokeWidth={1.5} />}
                        className={'border bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-950 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-900'}
                    />
                }
                form={submit}
            >

                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-12'>
                        <Input
                            type={'file'}
                            label={'Image'}
                            onChange={handleImageChange}
                            errors={errors.image}
                            placeholder={'Product Image'}
                        />
                    </div>
                    <div className='col-span-12'>
                        <InputSelect
                            label="Category"
                            data={categories}
                            selected={selectedCategory}
                            setSelected={setSelectedCategoryHandler}
                            placeholder="Select category"
                            errors={errors.category_id}
                            multiple={false}
                            searchable={true}
                            displayKey='name'
                        />
                    </div>
                    <div className='col-span-12'>
                        <Input
                            type={'text'}
                            label={'Product Code/Barcode'}
                            value={data.barcode}
                            onChange={e => setData('barcode', e.target.value)}
                            errors={errors.barcode}
                            placeholder={'Barcode'}
                        />
                    </div>
                    <div className='col-span-6'>
                        <Input
                            type={'text'}
                            label={'Name'}
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            errors={errors.title}
                            placeholder={'Product Name'}
                        />
                    </div>
                    <div className='col-span-6'>
                        <Input
                            type={'number'}
                            label={'Stock'}
                            value={data.stock}
                            onChange={e => setData('stock', e.target.value)}
                            errors={errors.stock}
                            placeholder={'Available Stock'}
                        />
                    </div>
                    <div className='col-span-12'>
                        <Textarea
                            name='description'
                            label={'description'}
                            type={'text'}
                            placeholder={'Product Description'}
                            errors={errors.description}
                            onChange={e => setData('description', e.target.value)}
                            value={data.description}
                        />
                    </div>
                    <div className='col-span-6'>
                        <Input
                            type={'number'}
                            label={'Purchase Price'}
                            value={data.buy_price}
                            onChange={e => setData('buy_price', e.target.value)}
                            errors={errors.buy_price}
                            placeholder={'Product Purchase Price'}
                        />
                    </div>
                    <div className='col-span-6'>
                        <Input
                            type={'number'}
                            label={'Selling Price'}
                            value={data.sell_price}
                            onChange={e => setData('sell_price', e.target.value)}
                            errors={errors.sell_price}
                            placeholder={'Product Selling Price'}
                        />
                    </div>
                </div>
                {/*
                <div className='mb-4 flex flex-col md:flex-row justify-between gap-4'>
                    <div className=''>
                        <InputSelect
                            label="Kategori"
                            data={categories}
                            selected={selectedCategory}
                            setSelected={setSelectedCategoryHandler}
                            placeholder="Pilih kategori"
                            errors={errors.category_id}
                            multiple={false}
                            searchable={true}
                            displayKey='name'
                        />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <Input
                            type={'text'}
                            label={'Barcode'}
                            value={data.barcode}
                            onChange={e => setData('barcode', e.target.value)}
                            errors={errors.barcode}
                        />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <Input
                            type={'text'}
                            label={'Nama'}
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            errors={errors.title}
                        />
                    </div>
                </div>
                <div className='mb-4 flex flex-col md:flex-row gap-4'>
                    <div className='w-full md:w-1/2'>
                        <Input
                            type={'number'}
                            label={'Harga Beli'}
                            value={data.buy_price}
                            onChange={e => setData('buy_price', e.target.value)}
                            errors={errors.buy_price}
                        />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <Input
                            type={'number'}
                            label={'Harga Jual'}
                            value={data.sell_price}
                            onChange={e => setData('sell_price', e.target.value)}
                            errors={errors.sell_price}
                        />
                    </div>
                </div>
                <div className='mb-4 flex flex-col md:flex-row gap-4'>
                    <div className='w-full md:w-1/2'>
                        <Input
                            type={'number'}
                            label={'Stok'}
                            value={data.stock}
                            onChange={e => setData('stock', e.target.value)}
                            errors={errors.stock}
                        />
                    </div>
                </div> */}
            </Card>
        </>
    )
}

Create.layout = page => <DashboardLayout children={page} />
