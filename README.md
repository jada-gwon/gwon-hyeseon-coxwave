# GWON-HYESEON-COXWAVE

Align AI Frontend Engineer 기술 과제 - 권혜선

## 실행 방법

_이 프로젝트는 NodeJS v22.11.0 그리고 pnpm을 필요로 합니다._

1. 먼저 실팽에 필요한 의존성을 설치합니다.

   ```bash
   pnpm install --frozen-lockfile
   ```

2. 아래와 같이 개발모드로 실행합니다.

   ```bash
   pnpm dev
   ```

## 프로젝트 구조

FSD를 사용하면서도 Next.js의 app route와 충돌을 피하기 위해서 Next.js 페이지 관련 코드들은 `app` 디렉토리에 FSD를 적용한 컴포넌트와 함수들은 `src` 디렉토리에 위치시켰습니다.

## 사용한 라이브러리들과 사용 목적

## 특별히 신경 쓴 부분

## 시간이 더 주어진다면 보완하고싶은 부분

- 키보드를 사용하여 Select 컴포넌트를 조작할 수 있도록 지원
  - 현재 Select 컴포넌트는 마우스를 이용해서만 값을 선택 할 수 있습니다. 더 나은 접근성을 위해 키보드의 화살표 키 등을 이용해 값을 선택 할 수 있도록 기능을 확장하고싶습니다.
