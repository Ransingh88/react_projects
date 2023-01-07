import "./App.css";

function App() {
  return (
    <div className="bg-slate-50 box-border">
      <div className="container mx-auto">
        <div className="mx-6 h-screen flex flex-col items-center">
          <h1 className="p-2">Calendar</h1>
          <div className="w-2/3 h-full m-4 bg-gray-100 rounded-md flex">
            <div className="w-4/5">gerggeer</div>
            <div className="w-1/3 h-full p-2 text-slate-50 bg-gradient-to-b from-[#33AFF3] to-[#47AB43] rounded-tr-md rounded-br-md flex flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                <h1 className="text-7xl font-medium tracking-wide">2023</h1>
                <p className="text-sm font-light text-slate-200">
                  Simple one page calendar
                </p>
              </div>
              <div className="w-full p-8 gap-x-6 gap-y-4 grid grid-flow-col grid-rows-7">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
              </div>
              <div className="flex flex-col items-center justify-self-end">
                <p className="text-sm text-slate-100 lowercase font-light">
                  crafted by dransingh
                </p>
                <p className="text-sm tracking-[0.15em]">
                  www.minionstudio.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
