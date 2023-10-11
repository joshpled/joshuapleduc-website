import { Spring } from '@react-spring/web'

const Home = () => {
    return (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {style => <animated.div style={style} />}
        </Spring>
    )
}
