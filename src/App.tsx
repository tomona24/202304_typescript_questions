import React, { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import './App.css'
import QuestionPage from './questionPage'

interface Inputs {
    example: string
    exampleRequired: string
}

const App: React.FunctionComponent = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const [page, setPage] = useState(1)
    const [data, setData] = useState({})
    const nextPage = (values) => {
        setPage(page + 1)
        setData((preData) => ({
            ...prevData,
            ...values,
        }))
    }
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('onSubmit:', data)
    }
    console.log('watach:', watch('example'))
    return (
        <div className="text-black bg-pink-300">
            <header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <QuestionPage questionNum={1}>
                        {/* register関数の呼び出しにより、フォーム入力の要素を引数の名前で登録する */}
                        <input defaultValue="test" {...register('example')} />
                        <br />
                        {/* register関数の第2引数には、HTML標準フォームデータ検証のルールが渡せる */}
                        <input
                            {...register('exampleRequired', {
                                required: true,
                            })}
                        />
                        {/* データ検証に失敗するとerrorsが返され、登録した名前で取り出せる */}
                        {errors.exampleRequired != null && (
                            <span
                                style={{
                                    color: 'red',
                                }}
                            >
                                This field is required
                            </span>
                        )}
                    </QuestionPage>
                    <input type="submit" />
                </form>
            </header>
        </div>
    )
}

export default App
