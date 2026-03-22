const summarizeBtn = document.getElementById("summarizeBtn");
const lectureText = document.getElementById("lectureText");
const summaryResult = document.getElementById("summaryResult");
const statusText = document.getElementById("status");

async function summarizeLecture() {
  // 입력값 앞뒤 공백 제거
  const text = lectureText.value.trim();

  if (!text) {
    statusText.textContent = "요약할 내용을 먼저 입력해 주세요.";
    return;
  }

  summarizeBtn.disabled = true;
  statusText.textContent = "요약 중입니다...";
  summaryResult.textContent = "요약 생성 중...";

  try {
    // 백엔드 요약 API 호출
    const response = await fetch("/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    // 서버 에러 메시지가 있으면 그대로 사용자에게 노출
    if (!response.ok) {
      throw new Error(data.detail || "요약에 실패했습니다.");
    }

    summaryResult.textContent = data.summary || "요약 결과가 비어 있습니다.";
    statusText.textContent = "완료";
  } catch (error) {
    // 네트워크/서버 오류 처리
    summaryResult.textContent =
      "오류가 발생했습니다. 서버 로그를 확인해 주세요.";
    statusText.textContent = error.message;
  } finally {
    // 요청 종료 후 버튼 다시 활성화
    summarizeBtn.disabled = false;
  }
}

// 버튼 클릭 시 요약 실행
summarizeBtn.addEventListener("click", summarizeLecture);
