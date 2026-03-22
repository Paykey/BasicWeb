# 📝 Summing-up AI Practice (강의자료 요약 웹)

## 🛠️ 기술 스택

- **Backend:** FastAPI, Python 3.10
- **AI 연동:** OpenAI API
- **Container:** Docker
- **CI/CD:** GitHub Actions

## 📌 주요 진행 상황

- [x] FastAPI 기본 서버 및 Docker 컨테이너 환경 격리 완료
- [x] GitHub Actions를 통한 자동 빌드(CI) 파이프라인 구축
- [x] OpenAI API 키 발급 및 환경변수(.env) 보안 세팅 완료
- [ ] 사용자 업로드 파일(강의자료) 텍스트 추출 기능 구현 (예정)
- [ ] OpenAI API를 활용한 핵심 내용 요약 기능 연동 (예정)
- [ ] 완성된 컨테이너 홈 서버 배포 및 테스트 (예정)

## 🚀 로컬 LLM 테스트 모드

기본값은 로컬 LLM(Ollama) 호출입니다.

1. Ollama 실행 후 모델 다운로드
2. 환경변수(선택)

```env
LOCAL_LLM_ENDPOINT=http://localhost:11434/api/generate
LOCAL_LLM_MODEL=llama3.1:8b
```

3. 서버 실행

```bash
uvicorn main:app --reload
```

4. 브라우저에서 접속

```text
http://127.0.0.1:8000
```

## 🔁 OpenAI API로 다시 전환하기

- `main.py` 상단의 OpenAI import/client 주석을 해제
- `/summarize` 아래 OpenAI 블록 주석을 해제하고 로컬 LLM 블록을 비활성화
- `.env`에 `OPENAI_API_KEY` 설정
