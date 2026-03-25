# Summing-up AI Web (강의자료 파일 요약 웹)

## 기술 스택

- **Backend:** FastAPI, Python 3.10
- **AI 연동:** Local LLM(Ollama) / OpenAI API
- **Container:** Docker
- **CI/CD:** GitHub Actions, k3s, Argo CD

## 주요 진행 상황

- [x] FastAPI 기본 서버 및 Docker 컨테이너 환경 격리 완료
- [x] GitHub Actions를 통한 자동 빌드(CI) 파이프라인 구축
- [x] OpenAI API 키 발급 및 환경변수(.env) 보안 세팅 완료
- [x] 로컬 LLM 세팅 완료
- [x] PDF/PPTX 파일 업로드 및 텍스트 추출 기능 구현
- [x] 추출 텍스트 기반 핵심 내용 요약 기능 연동
- [x] GitOps 기반 배포 (GitHub 저장소 → GitHub Actions → Docker Hub → ArgoCD → k3s)

> 참고: 구형 `.ppt` 형식은 현재 미지원이며, `.pptx`로 변환 후 업로드해야 합니다.

## 실행 방법

### 1. 필수 프로그램

프로젝트를 실행하기 전, 로컬 PC에 아래 프로그램들이 설치되어 있어야 합니다.

- **Docker Desktop** (또는 Docker & Docker Compose Plugin)
- **Ollama** (로컬 LLM 구동용)

### 2. 빌드 및 실행 (Docker Compose)

모든 환경 설정은 docker-compose.yml에 정의되어 있습니다. 아래 명령어로 서버를 실행합니다.

```
docker compose up -d --build
```

### 3. 웹 서비스 접속

컨테이너가 정상적으로 실행되었다면, 아래 주소로 접속 가능합니다.

```
http://localhost:8000
```

### 4. 종료

백그라운드에서 돌아가는 컨테이너를 안전하게 종료하려면 아래 명령어를 입력합니다.

```
docker compose down
```

## OpenAI API로 다시 전환하기

- `main.py` 상단의 OpenAI import/client 주석을 해제
- `/summarize` 아래 OpenAI 블록 주석을 해제하고 로컬 LLM 블록을 비활성화
- `.env`에 `OPENAI_API_KEY` 설정
