import React from 'react'
import runBoy from './walk_boy_run.png'
import walkBoy from './walk_boy_walk.png'
import standBoy from './walk_boy_stand.png'

interface Props {
    preview?: boolean
    questionNum: number
    children: React.ReactNode
}
const QuestionPage = ({ children, questionNum }: Props): React.ReactElement => {
    const boyImg = (questionNum: number): string => {
        if (questionNum === 1) {
            return runBoy
        }
        if (questionNum === 2) {
            return standBoy
        }
        return walkBoy
    }

    return (
        <>
            <img src={boyImg(questionNum)} alt="runBoy" />
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
        </>
    )
}

export default QuestionPage
