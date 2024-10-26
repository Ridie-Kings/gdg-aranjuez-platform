import { motion } from "framer-motion"
import languages from "@/components/auth/login/firstConnection/listLanguage.json"

export default function firstConnection() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ ease: "easeIn", duration: 20 }}
            className="w-full flex justify-center"
        >
            firstConnection
        </motion.div>
    )
}
