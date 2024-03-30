import React from 'react'
import A from './components/A'
import Assist from './components/Assist'
import Div from './components/Div'
import H1 from './components/H1'
import H2 from './components/H2'
import H3 from './components/H3'
import Item from './components/Item'
import DateTime from './components/DateTime'
import P from './components/P'
import TechStack from './components/TechStack'
import './App.css'

export default function App() {
	return (
		<div className="DefaultContainer">
			<span>김명기</span>
			<span> (riroan)</span>
			<br />
			1998. 09. 09.
			<br />
			Backend Developer
			<hr />
			<br />
			<Div>
				안녕하세요
				<br />
				<ul>
					<Item depth={1}>언제나 현재 코드를 개선할 수 있는지 고민합니다.</Item>
					<Item depth={1}>What보다는 How와 Why를 중요하게 생각합니다.</Item>
					<Item depth={1}>알고 있는 지식을 알려주고 배우며 함께 성장하는 것을 지향합니다.</Item>
				</ul>
			</Div>
			<H1>WORK EXPERIENCES</H1>
			<Div>
				<H2>
					카카오 <Assist>Server Developer,</Assist> <DateTime>2024. 03. -</DateTime>
				</H2>
				<H2>
					카카오 (인턴) <Assist>Server Developer,</Assist> <DateTime>2024. 01. - 2024. 03.</DateTime>
				</H2>
				<H2>
					알로카도스 <Assist>Backend Developer,</Assist> <DateTime>2023. 03. - 2023. 12.</DateTime>
				</H2>
			</Div>
			<H1>PROJECTS</H1>
			<Div>
				<H2>
					APAP <Assist>Abnormal Pattern Alarmer Platform,</Assist> <DateTime>2021. 06. - 2021. 12.</DateTime>
				</H2>
				<TechStack>#Python #FastAPI #Pytorch #AWS #CV #React #Typescript</TechStack>
				<P>
					<A href="https://www.swmaestro.org/sw/bbs/B0000006/view.do?nttId=25024&menuNo=200015&pageIndex=5">소프트웨어 마에스트로 12기에서 수행한 프로젝트</A>입니다. CCTV에서 이상행동을
					감지하는 프로젝트로 Pytorch를 사용한 AI모델 개발/학습/배포를 진행했습니다. 추가로 관리자를 위한 Backoffice 페이지도 개발했습니다.
				</P>
				<ul>
					<Item depth={1}>CI/CD/CT 파이프라인 구성</Item>
					<Item depth={1}>Backbone Network 개선, Data augmentation, Fine tuning 학습 기법을 통해 탐지율 85% → 93% 개선</Item>
					<Item depth={1}>모델 개발을 위한 SOTA 논문 정독 및 적용</Item>
					<ul>
						<Item depth={2}>
							<A href="https://github.com/MVIG-SJTU/AlphAction">AlphAction</A>
						</Item>
						<Item depth={2}>
							<A href="https://github.com/ultralytics/yolov5">Yolo V5</A>
						</Item>
						<Item depth={2}>
							<A href="https://github.com/zengwb-lx/Yolov5-Deepsort-Fastreid">Deepsort + FastReid</A>
						</Item>
					</ul>
					<Item depth={1}>
						<A href="https://atomicdesign.bradfrost.com/chapter-2/">Atomic Design Pattern</A>을 사용하여 Backoffice 페이지 구현
					</Item>
					<Item depth={1}>Agile 개발 방법론 사용</Item>
					<ul>
						<Item depth={2}>데일리 스크럼 수행</Item>
						<Item depth={2}>2주단위 스프린트 4회 진행</Item>
					</ul>
				</ul>
			</Div>
			<Div>
				<H2>
					MKCloud <DateTime>2023. 01. - 2023. 05.</DateTime>
				</H2>
				<TechStack>#Typescript #React #Java #Spring #MySQL #Nginx #Oracle Cloud #Docker #Github Action</TechStack>
				<P>개인용 스토리지를 편리하게 사용할 수 있도록 개발한 1인 프로젝트입니다. 프론트엔드, 백엔드 개발을 모두 담당했습니다.</P>
				<ul>
					<Item depth={1}>Nginx를 사용하여 리버스 프록시 적용, 최대 전송 파일 크기 제한</Item>
					<Item depth={1}>Docker Compose, Github Action을 사용하여 CICD 구성</Item>
					<Item depth={1}>Spring Data JPA를 사용하여 ORM 적용</Item>
				</ul>
			</Div>
			<Div>
				<H2>
					Kunsolved <DateTime>2022. 04. - 2022. 10.</DateTime>
				</H2>
				<TechStack>#Typescript #React #Python #FastAPI #MySQL #AWS #Docker #Github Action</TechStack>
				<P>건국대학교 학생이 해결하지 않은 백준 문제를 분석하고 리스트를 제공하는 1인 프로젝트입니다. 프론트엔드, 백엔드 개발을 모두 담당했습니다.</P>
				<ul>
					<Item depth={1}>Docker Compose, Github Action을 사용하여 CICD 구성</Item>
					<Item depth={1}>Crontab을 사용하여 주기적인 작업 수행</Item>
					<Item depth={1}>ACM에서 SSL을 발급하여 Loadbalancer에 적용하여 HTTPS 통신 및 로드밸런싱</Item>
				</ul>
			</Div>
			<Div>
				<H2>
					Lollang <DateTime>2022. 04.</DateTime>
				</H2>
				<TechStack>#Python</TechStack>
				<P>만우절을 기념하여 롤에서 사용하는 채팅을 모방하여 프로그래밍하는 난해한 프로그래밍 언어를 개발했습니다.</P>
				<ul>
					<Item depth={1}>문법 정의 및 로직 구현</Item>
					<Item depth={1}>롤랭 위키 작성</Item>
				</ul>
			</Div>
			<H1>EDUCATION</H1>
			<P>
				<A href="https://cse.konkuk.ac.kr/cse/index.do">건국대학교 컴퓨터공학부</A> 17학번 학사 졸업
				<br />
				GPA 3.75/4.50 (CSE 3.75/4.50)
			</P>
			<H1>SKILLS</H1>
			<Div>
				<H2>FLUENT</H2>
				<TechStack>#Python #FastAPI #Django #Docker #Github Action #Slack SDK</TechStack>
			</Div>
			<Div>
				<H2>SO-SO</H2>
				<TechStack>#C++ #Java #Javascript #Typescript #Kubernetes #Spring #TensorFlow #React</TechStack>
			</Div>
			<Div>
				<H2>OTHERS</H2>
				<TechStack>#Computer Vision #Number Theory #Abstract Algebra #Algebra #Linear Algebra</TechStack>
			</Div>
			<H1>ACHIEVEMENTS</H1>
			<Div>
				<H2>
					<A href="https://icpc.global/">ICPC</A> <Assist>International Collegiate Programming Contest</Assist>
				</H2>
				<ul>
					<Item depth={1}>
						<A href="https://riroan.tistory.com/88">2022, Asia Seoul Regional Contest</A>
					</Item>
					<Item depth={1}>2018, Asia Seoul Regional Contest</Item>
				</ul>
			</Div>
			<Div>
				<H2>
					<A href="https://www.facebook.com/codingcompetitions/hacker-cup">Meta Hacker Cup</A>
				</H2>
				<ul>
					<Item>2023, Competed in Round 2</Item>
					<Item>
						<A href="https://riroan.tistory.com/85">2022, Competed in Round 2</A>
					</Item>
				</ul>
			</Div>
			<Div>
				<H2>
					<A href="https://ucpc.me/">UCPC</A> <Assist>전국 대학생 프로그래밍 대회</Assist>
				</H2>
				<ul>
					<Item>
						<A href="https://riroan.tistory.com/71">
							2022, 41<sup>th</sup> place
						</A>
					</Item>
				</ul>
			</Div>
			<Div>
				<H2>엘리스 코드 챌린지</H2>
				<ul>
					<Item>
						<A href="https://riroan.tistory.com/166">2023, 최우수상</A>
					</Item>
				</ul>
			</Div>
			<Div>
				<H2>현대모비스 알고리즘 경진대회</H2>
				<ul>
					<Item>
						<A href="https://riroan.tistory.com/151">2023, 장려상</A>
					</Item>
				</ul>
			</Div>
			<Div>
				<H2>탑 프로그래머스</H2>
				<ul>
					<Item>
						<A href="https://riroan.tistory.com/86">2022, 탑 프로그래머스 취득</A>
					</Item>
				</ul>
			</Div>
			<Div>
				<H2>쇼미더 코드</H2>
				<ul>
					<Item>2022, 1회차 금손 취득</Item>
				</ul>
			</Div>
			<H1>ALGORITHM EXPERIENCES</H1>
			<Div>
				<H2>
					<A href="https://www.acmicpc.net/user/riroan">백준</A>{' '}
					<Assist>
						문제 해결 수 3800<sup>+</sup>
					</Assist>
				</H2>
				<P>국내에서 가장 큰 알고리즘 문제 해결 플랫폼입니다. 현재 65등에 위치하고 있습니다.</P>
			</Div>
			<Div>
				<H2>
					<A href="https://solved.ac/profile/riroan">솔브드</A> <Assist style={{ color: '#00B4FC' }}>Diamond II</Assist>
				</H2>
				<P>백준에서 해결한 문제의 난이도에 따라 레이팅을 얻는 시스템입니다. 현재 278등에 위치하고 있고 상위 0.22%에 해당합니다.</P>
			</Div>
			<Div>
				<H2>
					<A href="https://solved.ac/profile/riroan/arena">솔브드 아레나</A> <Assist style={{ color: '#30A1E5' }}>최고 레이팅 2,234 (SS+)</Assist>
				</H2>
				<P>백준에서 개최되는 대회 성적에 따라 레이팅을 얻는 시스템입니다. 현재 44등에 위치하고 있고 상위 1.44%에 해당합니다.</P>
			</Div>
			<Div>
				<H2>
					<A href="https://codeforces.com/profile/riroan">Codeforces</A> <Assist style={{ color: '#AA00AA' }}>최고 레이팅 1,932 (Candidate Master)</Assist>
				</H2>
				<P>전세계적으로 인기가 많은 경쟁적 알고리즘 문제 해결 플랫폼입니다. 레이팅 1,932는 상위 3.91%에 해당합니다.</P>
			</Div>
			<Div>
				<H2>
					<A href="https://atcoder.jp/users/riroan">Atcoder</A> <Assist style={{ color: '#00C0C0' }}>최고 레이팅 1,369 (4Kyu)</Assist>
				</H2>
				<P>일본에서 만들어진 경쟁적 알고리즘 문제 해결 플랫폼입니다. 레이팅 1,369는 상위 7.58%에 해당합니다.</P>
			</Div>
			<Div>
				<H2>
					KUPC <Assist>Konkuk University Programming Contest</Assist>
				</H2>
				<P>건국대학교에서 개최한 알고리즘 문제 해결 대회입니다.</P>
				<ul>
					<Item depth={1}>
						<A href="http://scoreboard.riroan.com/problemset.pdf">KUPC 2022</A> 운영, 출제 및 검수
					</Item>
					<ul>
						<Item depth={2}>만쥬의 식사</Item>
						<Item depth={2}>비숍 여행</Item>
						<Item depth={2}>시험자리 배정하기</Item>
						<Item depth={2}>즐거운 XOR</Item>
					</ul>
					<Item depth={1}>
						<A href="https://www.acmicpc.net/category/989">KUPC 2023</A> 출제 및 검수
					</Item>
					<ul>
						<Item depth={2}>
							<A href="https://www.acmicpc.net/problem/30463">K-문자열</A>
						</Item>
						<Item depth={2}>
							<A href="https://www.acmicpc.net/problem/30462">MEXchange</A>
						</Item>
					</ul>
				</ul>
			</Div>
			<H1>ACTIVITIES</H1>
			<Div>
				<H2>
					<A href="https://fastapi.tiangolo.com/">FastAPI</A> 오픈소스 기여 <DateTime>2024. 01 - </DateTime>
				</H2>
				<P>FastAPI 공식문서 번역에 기여했습니다.</P>
			</Div>
			<Div>
				<H2>
					<A href="https://www.swmaestro.org/sw/main/main.do">SW 마에스트로</A> 12기 <DateTime>2021. 06. - 2021. 12.</DateTime>
				</H2>
				<P>한국정보산업연합회에서 주관하는 SW인재양성 프로그램입니다.</P>
			</Div>
			<Div>
				<H2>
					육군 SW 개발병 <DateTime>2019. 05. - 2020. 12.</DateTime>
				</H2>
				<P>SW 개발병으로 군 복무를 수행했습니다.</P>
			</Div>
			<H1>CONTACT WITH ME</H1>
			<Div>
				이메일: mail://riroan@naver.com
				<br />
				블로그: https://riroan.tistory.com
				<br />
				인스타그램: https://www.instagram.com/dding_gi_98
				<br />
				깃허브: https://github.com/riroan
				<br />
				백준: https://www.acmicpc.net/user/riroan
				<br />
				솔브드: https://solved.ac/profile/riroan
				<br />
				코드포스: https://codeforces.com/profile/
				<br />
				앳코더: https://atcoder.jp/users/riroan
			</Div>
			<H1>GAMES</H1>
			<Div>
				리그오브레전드: 명기명기김명기#KMG, 띵기명기김명기#KR1
				<br />
				메이플스토리: 학다리접기
			</Div>
		</div>
	)
}
