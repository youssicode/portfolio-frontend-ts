import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { urlFor } from "@/helpers/client"
import { fetchSanityData } from "@/helpers/utils"
import { SectionWrapper, MotionWrapper } from "@/wrappers"
import { BiLinkExternal } from "react-icons/bi"
import SectionHeading from "@/components/SectionHeading"

const Skills = () => {

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
  type SkillType = {
    index: string
    name: string
    icon: {
      asset: {
        _ref: string
      }
    }
  }

  // Sanity response type (full data structure)
  type SanityCertificationType = {
    _id: string;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    certificate: string;
    certificateLink: string;
    credentialId: string;
    index: string;
    issued: string;
    from: string;
    icon: {
      asset: {
        _ref: string;
        _type: string;
      };
      _type: string;
    };
  };

  // Component-specific type (only the data we actually use)
  type CertificationType = {
    index: string;
    certificate: string;
    certificateLink: string;
    credentialId: string;
    issued: string;
    from: string;
    icon: {
      asset: {
        _ref: string;
      };
    };
  };

  const [skills, setSkills] = useState<SkillType[]>([])
  const [certifications, setCertifications] = useState<CertificationType[]>([])

  useEffect(() => {
    const skillsMapper = ({ index, name, icon: { asset } }: SanitySkillType): SkillType => ({
      index,
      name,
      icon: { asset }
    });

    const certificationMapper = ({
      certificate,
      certificateLink,
      credentialId,
      index,
      issued,
      from,
      icon: { asset }
    }: SanityCertificationType): CertificationType => ({
      certificate,
      certificateLink,
      credentialId,
      index,
      issued,
      from,
      icon: { asset }
    });

    fetchSanityData<SanitySkillType, SkillType>('*[_type == "skills"]', skillsMapper, setSkills);
    fetchSanityData<SanityCertificationType, CertificationType>('*[_type == "certifications"]', certificationMapper, setCertifications);
  }, []);

  const sortState = (data: SkillType[] | CertificationType[]) => data.sort((a, b) => parseInt(a.index) - parseInt(b.index))

  const subCertificateStyle =
    "ml-[2.6rem] before:content-['--'] before:absolute before:left-[-1.1rem]"

  return (
    <>
      <SectionHeading text1="expertise &" text2="credentials" />

      <div className="app__skills-container w-full lg:w-4/5 mt-12 flex flex-col justify-center items-center gap-14 lg:gap-24 lg:flex-row">
        <motion.div
          className="app__skills-list flex-1 flex flex-wrap justify-center items-cenetr lg:justify-start lg:items-start min-w-56 max-w-4xl gap-8"
          whileInView={{ opacity: [0, 1] }}
          transition={{ delayChildren: 0.5 }}
        >
          {/* sorting the skills'icons using skill's 'index' property before mapping */}
          {(sortState(skills) as SkillType[])
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
            ))}
        </motion.div>

        <div
          className="relative h-[26rem] before:content-[''] before:w-0 before:h-[78%] before:border-l before:absolute before:left-[2.5rem] before:bottom-4
        shadow-simpleShadow bg-black/5 backdrop-blur-sm rounded-3xl min-w-full min-[450px]:min-w-[24rem] py-2 px-4 mt-8 min-[900px]:mt-0"
        >
          <h2 className="font-semibold text-2xl text-center my-3">
            Certifications
          </h2>

          {/* sorting the certifications using certification 'index' property before mapping */}
          {(sortState(certifications) as CertificationType[])
            .map(({ index, credentialId, icon, certificate, from, issued, certificateLink }) => (
              <motion.div
                className={
                  (index === "0" ? "" : subCertificateStyle) +
                  " group relative bg-black/5 rounded-lg flex justify-start items-center p-2 mx-0 hover:before:content-[''] hover:bg-white hover:scale-110 min-[450px]:hover:scale-125 my-2 hover:my-[-12px] hover:shadow-simpleShadow hover:z-10 transition-all duration-300 ease-linear"
                }
                key={credentialId}
              >
                <img
                  src={urlFor(icon)}
                  className={
                    (index === "0" ? "size-8 bg-gray " : "size-6 ") +
                    "group-hover:size-12 mr-4"
                  }
                  alt="credential logo"
                />
                <div>
                  <h4
                    className={
                      (index === "0" ? "text-xl " : "text-base ") +
                      "font-medium"
                    }
                  >
                    {certificate}
                  </h4>
                  <p className="text-sm text-left text-gray leading-6 hidden group-hover:block">
                    <span className="font-extrabold">{from}</span> -{" "}
                    {issued} -{" "}
                    <a
                      href={certificateLink}
                      className="text-secondary  cursor-pointer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      show
                      <BiLinkExternal className="inline-block w-4 ml-1" />
                    </a>
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(
  MotionWrapper(Skills, "app__skills"),
  "skills",
  "bg-white"
)
