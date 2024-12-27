# GWON-HYESEON-COXWAVE

Align AI Frontend Engineer 기술 과제 - 권혜선

## 실행 방법

_이 프로젝트는 NodeJS v22.11.0 그리고 pnpm을 필요로 합니다._

1. 먼저 실행에 필요한 의존성을 설치합니다.

   ```bash
   pnpm config set @buf:registry https://buf.build/gen/npm/v1/
   pnpm install --frozen-lockfile
   ```

2. 아래와 같이 개발모드로 실행합니다.

   ```bash
   pnpm dev
   ```

## 프로젝트 구조

FSD를 사용하면서도 Next.js의 app route와 충돌을 피하기 위해서 Next.js 페이지 관련 코드들은 `app` 디렉토리에 FSD를 적용한 컴포넌트와 함수들은 `src` 디렉토리에 위치시켰습니다.

## 사용한 라이브러리들과 사용 목적

- `@tanstack/react-query`, `@connectrpc/connect-query"`, `@connectrpc/connect-web`:

  - 서버 데이터 페칭과 캐싱을 효율적으로 처리하고 API error 핸들링, 재시도 등과 같은 기능을 위한 보일러 플레이트 코드를 줄이기 위해 선택했습니다.

- `zustand`:

  - 이벤트 목록의 필터 상태관리를 위해 사용했습니다.
  - zustand가 지향하는 Flux 아키텍쳐(Elm 아키텍쳐)가 상태 변화에 대한 비즈니스로직을 액션 이름으로 추상화 할 수 있다는 점이 코드의 가독성을 높일 수 있어서 사용했습니다.

- `date-fns`, `@date-fns/tz`:

  - 이벤트 조회 기간 필터 기능 구현에 필요한 날짜 연산을 위해 사용했습니다.

- `react-datepicker`

  - 이벤트 조회 기간 필터의 Custom 버튼을 클릭 했을 때 표시되는 데이트피커 구현을 위해 사용했습니다.

- `tailwindcss`

  - 유틸리티 클래스 기반으로 빠르게 스타일링하기 위해 사용했습니다.

- `clsx`
  - 컴포넌트의 상태 등의 조건에 따라 tailwindcss 클래스를 편리하게 적용하기 위해 사용했습니다.

## 특별히 신경 쓴 부분

## 시간이 더 주어진다면 보완하고싶은 부분

- 키보드를 사용하여 Select 컴포넌트를 조작할 수 있도록 지원

  - 현재 Select 컴포넌트는 마우스를 이용해서만 값을 선택 할 수 있습니다. 더 나은 접근성을 위해 키보드의 화살표 키 등을 이용해 값을 선택 할 수 있도록 기능을 확장하고싶습니다.

- E2E테스트 적용
