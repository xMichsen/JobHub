--
-- PostgreSQL database dump
--

-- Dumped from database version 10.23
-- Dumped by pg_dump version 10.23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: applications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.applications (
    applicationid integer NOT NULL,
    userid integer,
    jobid integer,
    applicationdate date,
    status character varying(20)
);


ALTER TABLE public.applications OWNER TO postgres;

--
-- Name: applications_applicationid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.applications_applicationid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.applications_applicationid_seq OWNER TO postgres;

--
-- Name: applications_applicationid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.applications_applicationid_seq OWNED BY public.applications.applicationid;


--
-- Name: companies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.companies (
    companyid integer NOT NULL,
    name character varying(100),
    image character varying(255),
    description text,
    location character varying(100),
    industry character varying(100)
);


ALTER TABLE public.companies OWNER TO postgres;

--
-- Name: companies_companyid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.companies_companyid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.companies_companyid_seq OWNER TO postgres;

--
-- Name: companies_companyid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.companies_companyid_seq OWNED BY public.companies.companyid;


--
-- Name: jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jobs (
    jobid integer NOT NULL,
    title character varying(100),
    description text,
    skillsrequired text,
    location character varying(100),
    salary integer,
    companyid integer,
    recruiterid integer
);


ALTER TABLE public.jobs OWNER TO postgres;

--
-- Name: jobs_jobid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jobs_jobid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.jobs_jobid_seq OWNER TO postgres;

--
-- Name: jobs_jobid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jobs_jobid_seq OWNED BY public.jobs.jobid;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    userid integer NOT NULL,
    firstname character varying(100),
    lastname character varying(100),
    email character varying(100),
    password character varying(100),
    role character varying(20)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_userid_seq OWNER TO postgres;

--
-- Name: users_userid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_userid_seq OWNED BY public.users.userid;


--
-- Name: applications applicationid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.applications ALTER COLUMN applicationid SET DEFAULT nextval('public.applications_applicationid_seq'::regclass);


--
-- Name: companies companyid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies ALTER COLUMN companyid SET DEFAULT nextval('public.companies_companyid_seq'::regclass);


--
-- Name: jobs jobid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs ALTER COLUMN jobid SET DEFAULT nextval('public.jobs_jobid_seq'::regclass);


--
-- Name: users userid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN userid SET DEFAULT nextval('public.users_userid_seq'::regclass);


--
-- Data for Name: applications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.applications (applicationid, userid, jobid, applicationdate, status) FROM stdin;
\.


--
-- Data for Name: companies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.companies (companyid, name, image, description, location, industry) FROM stdin;
1	Samsung	samsung.png	Samsung, South Korean company that is one of the worlds largest producers of electronic devices. Samsung specializes in the production of a wide variety of consumer and industry electronics, including appliances, digital media devices, semiconductors, memory chips, and integrated systems.	South Korea	Electronics
2	Apple	apple.png	Apple Inc (Apple) designs, manufactures, and markets smartphones, tablets, personal computers, and wearable devices. The company also offers software applications and related services, accessories, and third-party digital content.	USA	Elelectronics
3	Microsoft	microsoft.png	Microsoft Corporation is an American multinational technology corporation that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.	United States	Technology
4	Google	google.png	Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.	United States	Technology
5	Amazon	amazon.png	Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington. It is one of the world's largest online marketplaces, AI assistants provider, and cloud computing platforms.	United States	Technology
6	Tesla	tesla.png	Tesla, Inc. is an American electric vehicle and clean energy company founded by Elon Musk, Martin Eberhard, Marc Tarpenning, JB Straubel, and Ian Wright.	United States	Automotive
\.


--
-- Data for Name: jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jobs (jobid, title, description, skillsrequired, location, salary, companyid, recruiterid) FROM stdin;
1	Software Engineer	Develop, test, and maintain software	JavaScript, HTML, CSS	Warsaw	80000	1	1
2	Data Analyst	Analyze and interpret complex data	SQL, Python, Excel	Krakow	70000	2	4
3	Project Manager	Manage and oversee project execution	Leadership, Organization, Communication	Gdansk	90000	3	5
4	Web Developer	Build and maintain websites	JavaScript, HTML, CSS	Wroclaw	75000	4	6
5	UX Designer	Design user-friendly interfaces	Figma, Adobe XD, Sketch	Poznan	78000	5	7
6	Database Administrator	Manage and maintain databases	SQL, PostgreSQL, MySQL	Lodz	85000	1	1
7	Product Manager	Oversee product development	Leadership, Communication, Agile	Szczecin	88000	2	4
8	Quality Assurance Analyst	Ensure software quality	Attention to detail, Communication, Testing tools	Bydgoszcz	72000	3	5
9	DevOps Engineer	Collaborate with developers and IT staff	CI/CD, AWS, Docker	Torun	85000	4	6
10	Systems Analyst	Analyze and improve computer systems	Analytical skills, Problem-solving, IT knowledge	Katowice	82000	5	7
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (userid, firstname, lastname, email, password, role) FROM stdin;
1	Michal	Sacharczuk	xmichsen@gmail.com	$2a$06$UpvBRMwb4NjvhnR6rhjS9.BdFvwYwk/5x1DVm48tnhdOSPD0d66Hu	admin
2	Steve	Jobs	michalsacharczuk99@gmail.com	$2a$06$YpSURMJlMCpyZ8xZL3mgdeWsHcQ7c184m8KEjIwXB06d3mVcfbK5O	recruiter
3	Test	Testowy	testowy@gmail.com	$2a$06$3Gchl4.pciP2Vl4NmRvdT.7060MNMrlKCBSZ8KM0WnlZrCZVAHzVi	user
4	Joe	The recruiter	joe@gmail.com	$2a$06$TeacEywBZBj8tKk7l85LFO6wAiG2ZK5OAEUO6eZcFixmsuk0aqK66	recruiter
5	Pablo	The recruiter	pablo@gmail.com	$2a$06$FdadougX.XoSehiuSc2nbe5MpPrF/zha8XfCiYF69YJZul5RnRcoC	recruiter
6	Hank	The recruiter	hank@gmail.com	$2a$06$nWxeX9OOt8aJi4nCfPRH5.nijnVPjz81KPL1uTg1wDSFcrs1FHYRK	recruiter
7	Adam	The recruiter	adam@gmail.com	$2a$06$WBZy2ifJH83ePZzOJ2em5u.GWIUcRzj5HQLdsUkKabhV7BhEAQfHW	recruiter
\.


--
-- Name: applications_applicationid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.applications_applicationid_seq', 1, false);


--
-- Name: companies_companyid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.companies_companyid_seq', 6, true);


--
-- Name: jobs_jobid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jobs_jobid_seq', 10, true);


--
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_userid_seq', 7, true);


--
-- Name: applications applications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_pkey PRIMARY KEY (applicationid);


--
-- Name: companies companies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (companyid);


--
-- Name: jobs jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (jobid);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (userid);


--
-- Name: applications applications_jobid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_jobid_fkey FOREIGN KEY (jobid) REFERENCES public.jobs(jobid);


--
-- Name: applications applications_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(userid);


--
-- Name: applications fk_applications_jobs; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.applications
    ADD CONSTRAINT fk_applications_jobs FOREIGN KEY (jobid) REFERENCES public.jobs(jobid) ON DELETE CASCADE;


--
-- Name: applications fk_applications_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.applications
    ADD CONSTRAINT fk_applications_users FOREIGN KEY (userid) REFERENCES public.users(userid) ON DELETE CASCADE;


--
-- Name: jobs fk_jobs_companies; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT fk_jobs_companies FOREIGN KEY (companyid) REFERENCES public.companies(companyid) ON DELETE CASCADE;


--
-- Name: jobs fk_jobs_users; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT fk_jobs_users FOREIGN KEY (recruiterid) REFERENCES public.users(userid) ON DELETE CASCADE;


--
-- Name: jobs jobs_companyid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_companyid_fkey FOREIGN KEY (companyid) REFERENCES public.companies(companyid);


--
-- Name: jobs jobs_recruiterid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_recruiterid_fkey FOREIGN KEY (recruiterid) REFERENCES public.users(userid);


--
-- PostgreSQL database dump complete
--

