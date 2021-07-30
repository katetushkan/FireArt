interface IProps{
    score: number,
    count: number
}
const Score = ({score, count}: IProps) => {

    const format_score = score < 10 ? `0${score}` : score
    const format_count = count < 10 ? `0${count}` : count

    return (
        <div className="score">
            <h6 className="score_h3"><strong className="score_strong">{format_score}</strong>/{format_count}</h6>
        </div>
    )
}

export default Score;