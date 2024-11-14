import React, { useState, useEffect } from "react"
import { motion } from 'framer-motion'
import { fetchSanityData, sortState } from "@/helpers/utils"
import { urlFor } from "@/helpers/client"
import Loading from "@/components/Loading"


// Sanity response type (full data structure)
type SanitySkillType = {
    _id: string
    _type: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    name: string
    bgColor: string
    icon: {
        asset: {
            _ref: string
            _type: string
        }
        _type: string
    }
    index: string
}

// Component-specific type (only the data we actually need)
export type SkillType = {
    index: string
    name: string
    icon: {
        asset: {
            _ref: string
        }
    }
}

const SkillsSection = () => {
    const [skills, setSkills] = useState<SkillType[]>([])

    useEffect(() => {
        const skillsMapper = ({ index, name, icon: { asset } }: SanitySkillType): SkillType => ({
            index,
            name,
            icon: { asset }
        });
        fetchSanityData<SanitySkillType, SkillType>('*[_type == "skills"]', skillsMapper, setSkills);
    }, []);
    return (
        <motion.div
            className="flex-1 flex flex-wrap justify-center items-start min-w-56 max-w-4xl gap-[1.7rem] min-[375px]:gap-[2.2rem]"
            whileInView={{ opacity: [0, 1] }}
            transition={{ delayChildren: 0.5 }}
        >
            {/* sorting the skills'icons using skill's 'index' property before mapping */}
            {skills.length > 0 ? (sortState(skills) as SkillType[])
                .map(({ name, icon }) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1], y: [50, 0] }}
                        transition={{ duration: 0.5 }}
                        className="w-24 2xl:w-28 p-2 rounded-2xl bg-[white] border border-solid border-lightGray hover:shadow-simpleShadow"
                        key={name}
                    >
                        <img
                            className="size-10 2xl:size-12 block mx-auto my-[5px]"
                            src={urlFor(icon)}
                            alt={name}
                        />
                        <p className="text-base 2xl:text-xl text-center text-gray leading-6 mt-1">
                            {name}
                        </p>
                    </motion.div>
                )) : <Loading />}

        </motion.div>
    )
}

export default SkillsSection